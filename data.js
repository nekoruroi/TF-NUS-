var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.17442117140532964,
        "pitch": 0.038631741520024576,
        "fov": 1.5568770204620477
      },
      "linkHotspots": [
        {
          "yaw": 0.36798653941913173,
          "pitch": -0.2833767483403449,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.32885468087587455,
          "pitch": 0.07359343062974943,
          "title": "Welcome to the Faculty of Engineering!",
          "text": "A place that develops talents of Singapore's tomorrow."
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.44702091717871895,
        "pitch": -0.3703289835557655,
        "fov": 1.5568770204620477
      },
      "linkHotspots": [
        {
          "yaw": 0.10477729067820185,
          "pitch": -0.0471483629884073,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4219275855719182,
          "pitch": -0.532920605708691,
          "title": "Art Sculpture",
          "text": "Engineering is not just maths and science!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.49092656955367886,
        "pitch": -0.04076108324960792,
        "fov": 1.5568770204620477
      },
      "linkHotspots": [
        {
          "yaw": 3.129628679407185,
          "pitch": 0.012191993687133973,
          "rotation": 3.141592653589793,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7577562872671493,
          "pitch": -0.1311342069274506,
          "title": "Coffee Shop",
          "text": "Engineering students have no time to sleep. Get your coffee fix here!"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
