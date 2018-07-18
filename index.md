---
layout: default
---

## About Me

I am a fourth year student at The Pennsylvania State University with an expected graduation date of May 2019. My objective is to find a full time position involving penetration testing, information security or risk assessment. During my years at Penn State, I have been involved with: Club Water Polo; THON; Red Cell Analytics; and the Information Assurance Club.

## Projects

These sections of python code were taken from a project that gathered two separate .csv files and sliced them together to make one master .csv file that would fit a desired format for visualization.

```python
#Initalize methods for data structuring
def cdmArrays(name, array):#Individual cdm arrays are filled with an array of sensors
    for x in range(len(name)):
        if row[3] == name[x]:
            array[x].append(row[0])

def moreTactics(name, array):#Indentifies lines with > 1 tactic and attaches sensors
    for x in range(len(array)):
        if row[16] == name[x]:
            for x in array[x]:
                writer.writerow((row[1], task, row[16], x))
        elif row[16] not in name:
            writer.writerow((row[1], task, row[16], nosensor))
```

```python
#Opens cdm/sensor data and fills it into arrays for use later
with open(args.sensors_input_path[0], 'r') as input, open('data/sensors.csv', 'w+', newline='') as output:
    writer = csv.writer(output, dialect='excel')
    reader = csv.reader(input)


    for row in reader:#Reads all rows
        if row[3] != '':#With a string in row[3]
            if r'.' in row[3]:#And splits everything after the '.'
                row[3] = row[3].split(r'.')[0]
                writer.writerow((row[0], row[3]))

                #Oganizes an array(sensorsStr) of the cdm values listed in row[3]
                #Creates a new array(sensorsArr) of empty arrays based on the length of sensorsStr
                cdm.append(row[3])
                sensorsStr = list(OrderedDict.fromkeys(cdm))
                cdmRange = len(sensorsStr)
                if len(sensorsArr) < cdmRange:
                    sensorsArr.append([])
                cdmArrays(sensorsStr, sensorsArr)
```

```js
// N/A
```


```python
# N/A
```

## Previous Experience

N/A

## More

N/A
