from asyncio import sleep
import imghdr
import time
from tkinter import HORIZONTAL
import cv2
import numpy as np
import serial
import win32api
from mss import mss
from tkinter import * 
import math
import random

Fov = 250
sct = mss()

# Create a button to get the value at the scale
kaysaa = serial.Serial('COM14', 1280000, timeout=0) 
boyutlar = sct.monitors[1]
boyutlar['left'] = int((boyutlar['width'] / 2) - (Fov / 3))
boyutlar['top'] = int((boyutlar['height'] / 2) - (Fov / 3))
boyutlar['width'] = Fov
boyutlar['height'] = Fov
mid = Fov / 3
 
while True:
        
    img = np.array(sct.grab(boyutlar))
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    low_purple = np.array([200, 105, 200])
    high_purple = np.array([255, 170, 255])
    mask = cv2.inRange(hsv,low_purple,high_purple)
    pixels = np.argwhere(mask == 255)

    kernel = np.ones((4,4), np.uint8)
    dilated = cv2.dilate(mask,kernel,iterations= 10)
    thresh = cv2.threshold(dilated, 40, 255, cv2.THRESH_BINARY)[1]
    contours, hierarchy = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE) #Countours = RGBPIxel
    if len(contours) == 1:
            
        aimhigh= 0
        aimwidh= -10
        M = cv2.moments(contours)
        point_to_aim = (int(M["m10"] / M["m00"]), int(M["m01"] / M["m00"]))

        closestX = point_to_aim[0]+aimhigh # offset a lil
        closestY = point_to_aim[1]+aimwidh

        diff_x = int(closestX - mid)
        diff_y = int(closestY - mid)
        target_x = diff_x * 0.25
        target_y = diff_y * 0.25
        time.sleep(0.00001)
        data = f'{target_x}:{target_y}'
        kaysaa.write(data.encode())

        
#triggerbot
