
# !!!!!!!!!!! UNDER DEVELOPMENT, CAN NOT BE USED AT THE TIME !!!!!!!!!!!!!!!!!!!!!!!!!

# :ship: Navigational System for Autonomous Ship :ship:

## Description

This is my final year project as marine engineer. Althought this projectssounds great, I was more of a typical mechanical/electrical student that mainly dealing with C/C++ and microcontroller. If currently happen to encounter bug or inefficiency on my code, feel free to contact me :smile:.

## Features

As other autonomous navigational systems that have been developed, this projects will featured with *Statics* and *Dynamics* obstacle to be handled by the algorithm. As of now I'm more focusing on implementing global path planning that implementing A* algorithm and H3 geospatial to face static obstacle. I also adding AIS (Automatic Information System) data for future development because I will try adding some fancy ML model to get a better local path planning that can comply with CORLEGs (International Regulations for Preventing Collisions at Sea 1972) regulation.

Currently Developed :
     
1. Path Finding : A-star combine with H3 geospatial ***(note: maybe RRT-star I'm still looking for both of this algorithm)***

2. AIS database : currently looking for free AIS data stream ('cause I'm broke :cry:).

## My Ideal Design
### 1. Location Identification
### 2. Obstacle Identification (Enviromental Mapping)
        - static object : Islands, Offshore Structure, Ocean Bathymetry
        - dynamic object : Another Ship, weather (storm etc)
### 2. Path Planning
        - Global Path Planning : to generate path based on static object
        - Local Path Planning : 
### 3. Communication

## Other related Projects:


