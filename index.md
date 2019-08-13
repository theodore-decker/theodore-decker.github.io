---
layout: default
---

# Welcome

I am a graduate from The Pennsylvania State University with a bachelors of science in Security and Risk Analysis and a minor in Information Sciences and Technology. I am currently employed by Booz Allen Hamilton and am eager to expand my technical experience in the following years. Please check out some of my projects below and feel free to look into what I'm all about in the bio section!

# Projects

## Creating Cyber Labs
One of my proudest achievements at Penn State involved my efforts to create a new club in the College of Information Sciences and Technology. Cyber Labs was formed in order to help both freshmen and upperclassmen expand on their education within the new Cyber Operations major at Penn State. The executive board and I sought out to teach students important systems in the world of cyber security such as Kali Linux, Metasploit, and command line.


## Image Classifier

Using Anaconda, Jupyter Notebook, and the Fast.ai library

Below, is the code used to create an image classifier that identifies 200 different Untied States bird species with an accuracy of about 86%

<p> Check out the classifier <a class="different_a" href="https://bird-v5jf.onrender.com">here</a>.</p>
Check out the classifier [here](https://bird-v5jf.onrender.com)


```python
#Load Libraries
from fastai import *
from fastai.vision import *
from fastai.metrics import error_rate

#Assign batch size
bs=64

#Untar and set directory for data
path = untar_data('https://s3.amazonaws.com/fast-ai-imageclas/CUB_200_2011',fname='/home/ubuntu/course-v3/nbs/dl1/birds/CUB_200_2011.tgz.tar', dest='/home/ubuntu/course-v3/nbs/dl1/birds');

#Functions called to bunch data elements together in a usable format
tfms = get_transforms(do_flip=False)
data = ImageDataBunch.from_folder(path, ds_tfms=tfms, valid_pct=.02, bs=bs, size=224).normalize(imagenet_stats)

#Assign the model and metrics used to learn
learn = cnn_learner(data, models.resnet50, metrics=error_rate)

#Model the assigned convolutional neural network
learn.model

#Fit the model 6 times with a learning rate between 1e-6 and 1e-4s
learn.fit_one_cycle(6, max_lr=slice(1e-5,1e-4))
```

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



# About Me

While there may many computer science students out there with similar and/or a more advanced technical background than me, I bring more to the table than clean lines of code.

I am extremely dedicated and carry a strong work ethic with every challenge I tackle. My previous summer work experience as a caddy is a testament to my ability to develop interpersonal relationships. Having worked on the golf course every summer since the 7th grade, I've picked up important communication skills that helped me stand out from the ordinary caddy. In 2015, at the age of 19, the head professional of Philadelphia Country named me Caddy of the Year.

While I love working the field of Cyber Security, I feel my strengths extend to a degree an average software developer does not possess. With the cyber security world becoming a necessity for any large business or firm, I feel the world needs people who can not only do the technical work, but communicate its importance as well.
