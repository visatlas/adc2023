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
                output[track_counter]["papers"].append(
                    {
                        "id": encore_count,
                        "title": row[4],
                        "venue": row[5],
                        "authors": row[3],
                        "affiliations": row[2],
                        "submitAuthor": row[0]
                    }
                )
                encore_count += 1
                continue
            
            if not row[0].isdigit():
                continue
            
            output[track_counter]["papers"].append(
                {
                    "id": row[0],
                    "title": row[1],
                    "authors": row[5],
                    "authorsFull": row[4]
                }
            )
            
    # save output as json
    with open('papers.json', 'w') as outfile:
        json.dump(output, outfile)
    
    
if __name__ == "__main__":
    convert("papers.csv")
