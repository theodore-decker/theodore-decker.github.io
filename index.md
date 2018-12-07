---
layout: default
---

# Welcome

I am a fourth year student at The Pennsylvania State University studying Security and Risk Analysis with a minor in Information Sciences and Technology. I am currently employed by Booz Allen Hamilton and am eager to expand my technical experience in the following years. Please check out some of my projects below and feel free to look into what I'm all about in the bio section!

# Projects

## Creating Cyber Labs
One of my proudest achievements at Penn State involved my efforts to create a new club in the College of Information Sciences and Technology. Cyber Labs was formed in order to help both freshmen and upperclassmen expand on their education within the new Cyber Operations major at Penn State. The executive board and I sought out to teach students important systems in the world of cyber security such as Kali Linux, Metasploit, and command line.


## Javascript Data Visualization Using D3

Temporary non-proprietary example borrowed from Jim Vallandingham

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

In this snippet of code, I used D3, a data visualization library used within Javascript. These specific lines are used to organize a large dataset into usable nodes for later visualization.


## Data Organization using Python

Temporary non-proprietary example


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

# About Me

While there may many computer science students out there with similar and/or a more advanced technical background than me, I bring more to the table than clean lines of code.

I am extremely dedicated and carry a strong work ethic with every challenge I tackle. My previous summer work experience as a caddy is a testament to my ability to develop interpersonal relationships. Having worked on the golf course every summer since the 7th grade, I've picked up important communication skills that helped me stand out from the ordinary caddy. In 2015, at the age of 19, the head professional of Philadelphia Country named me Caddy of the Year.

While I love working the field of Cyber Security, I feel my strengths extend to a degree an average software developer does not posses. With the cyber security world becoming a necessity for any large business or firm, I feel the world needs people who can not only do the technical work, but communicate its importance as well.
