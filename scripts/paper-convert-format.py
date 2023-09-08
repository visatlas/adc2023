import csv
import json

def convert(filename):
    output = []
    track_counter = 0
    encore_count = 1
    
    with open(filename, 'r') as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        for row in reader:
            if row[0] == "\ufeffShepherding Track":
                output.append(
                    {
                        "track": "shepherding",
                        "papers": []
                    }
                )
                track_counter = len(output) - 1
                continue
            
            if row[0] == "ADC2023":
                output.append(
                    {
                        "track": "research",
                        "papers": []
                    }
                )
                track_counter = len(output) - 1
                continue
            
            if row[0] == "Submitting Author":
                output.append(
                    {
                        "track": "encore",
                        "papers": []
                    }
                )
                track_counter = len(output) - 1
                continue
            

            
            if track_counter == 2:
                should_capitalize = True
                should_add_space = False
                author_formatted = ""
                for letter in row[3]:
                    if letter.isalpha():
                        if should_add_space:
                            author_formatted += " "
                            should_add_space = False
                        
                        if should_capitalize:
                            author_formatted += letter.upper()
                        else:
                            author_formatted += letter.lower()
                        should_capitalize = False
                    else:
                        if should_add_space:
                            author_formatted += " "
                            author_formatted += letter
                            should_add_space = False
                        else:
                            if letter == ",":
                                should_add_space = True
                            author_formatted += letter
                        should_capitalize = True
                    
                output[track_counter]["papers"].append(
                    {
                        "id": encore_count,
                        "submitAuthor": row[0],
                        "title": row[4],
                        "venue": row[5],
                        "authors": author_formatted.replace("And", "and"),
                        # "affiliations": row[2],
                    }
                )
                encore_count += 1
                continue
            
            # check row[0] is number
            if not row[0].isdigit():
                continue
            
            should_capitalize = True
            should_add_space = False
            author_formatted = ""
            for letter in row[5]:
                if letter.isalpha():
                    if should_add_space:
                        author_formatted += " "
                        should_add_space = False
                    
                    if should_capitalize:
                        author_formatted += letter.upper()
                    else:
                        author_formatted += letter.lower()
                    should_capitalize = False
                else:
                    if should_add_space:
                        author_formatted += " "
                        author_formatted += letter
                        should_add_space = False
                    else:
                        if letter == ",":
                            should_add_space = True
                        author_formatted += letter
                    should_capitalize = True
            
            output[track_counter]["papers"].append(
                {
                    "id": row[0],
                    "title": row[1],
                    "authors": author_formatted.replace("And", "and"),
                    # "authorsFull": row[4]
                }
            )
            
    # save output as json
    with open('papers.json', 'w') as outfile:
        json.dump(output, outfile)
    
    
if __name__ == "__main__":
    convert("papers.csv")
