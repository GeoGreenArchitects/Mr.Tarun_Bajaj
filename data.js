var APP_DATA = {
  "scenes": [
    {
      "id": "0-facade",
      "name": "Facade",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1262901464066886,
          "pitch": 0.07132766173353566,
          "rotation": 4.71238898038469,
          "target": "3-pathway"
        },
        {
          "yaw": -1.9634485245870152,
          "pitch": 0.23194994133710978,
          "rotation": 0,
          "target": "2-facade-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-courtyard",
      "name": "Courtyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.342500695091438,
          "pitch": 0.1822497816290305,
          "rotation": 1.5707963267948966,
          "target": "3-pathway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-facade-corner",
      "name": "Facade Corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4121915946054582,
          "pitch": 0.3124764381464882,
          "rotation": 6.283185307179586,
          "target": "0-facade"
        },
        {
          "yaw": 0.5412193147311619,
          "pitch": 0.014257404519018024,
          "rotation": 4.71238898038469,
          "target": "1-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pathway",
      "name": "Pathway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.048814104402474356,
          "pitch": 0.15835305739450156,
          "rotation": 4.71238898038469,
          "target": "1-courtyard"
        },
        {
          "yaw": -3.0083133459542033,
          "pitch": 0.15897164326015556,
          "rotation": 1.5707963267948966,
          "target": "0-facade"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mr.Tarun Bajaj",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
