---
layout: default
---

# About Me

I am a fourth year student at The Pennsylvania State University studying Security and Risk Analysis with a minor in Information Sciences and Technology. During my years at Penn State, I have enjoyed my time playing for the Club Water Polo team and participating in THON each year. I am currently employed by Booz Allen Hamilton and am looking forward to expanding my technical experience in the following years. Please check out some of my projects below and reach out to me with any questions or concerns!

# Projects

## Creating Cyber Labs
One of my proudest achievements at Penn State involved my efforts to create a new club in the College of Information Sciences and Technology. Cyber Labs was formed in order to help both freshmen and upperclassmen expand on their education within the new Cyber Operations major at Penn State. The executive board and I sought out to teach students important systems in the world of cyber security such as Kali Linux, Metasploit, and command line.

## Javascript Data Visualization Using D3
### Example borrowed from Jim Vallandingham
```js
function createNodes(rawData) {
  // Use the max total_amount in the data as the max in the scale's domain
  // note we have to ensure the total_amount is a number.
  var maxAmount = d3.max(rawData, function (d) { return +d.total_amount; });

  // Sizes bubbles based on area.
  // @v4: new flattened scale names.
  var radiusScale = d3.scalePow()
    .exponent(0.5)
    .range([2, 85])
    .domain([0, maxAmount]);

  // Use map() to convert raw data into node data.
  // Checkout http://learnjsdata.com/ for more on
  // working with data.
  var myNodes = rawData.map(function (d) {
    return {
      id: d.id,
      radius: radiusScale(+d.total_amount),
      value: +d.total_amount,
      name: d.grant_title,
      org: d.organization,
      group: d.group,
      year: d.start_year,
      x: Math.random() * 900,
      y: Math.random() * 800
    };
  });

  // sort them to prevent occlusion of smaller nodes.
  myNodes.sort(function (a, b) { return b.value - a.value; });

  return myNodes;
}
```

Here, I used D3, a Javascript library, to organize a large dataset into usable nodes for later visualization

## Data Organization using Python
### Temporary non-proprietary example
```python
import os
# Read file
open('/Documents/GitHub/rawData.csv', 'r') as rawData

# Edit file
 for line in rawData:
     print("NEW DATA")

# Write file
open('/Documents/GitHub/newData.csv', 'w') as newData
newData.close()
```

# Previous Experience

N/A

# More

N/A
