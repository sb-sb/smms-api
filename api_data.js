define({ "api": [
  {
    "type": "post",
    "url": "/albums",
    "title": "Create Album",
    "name": "Create_Albums",
    "group": "Album",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "album_name",
            "description": "<p>Album name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "album_description",
            "description": "<p>Album description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Album ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.uid",
            "description": "<p>Album User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Album name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>Album description.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "data.created_at",
            "description": "<p>Album creation datetime.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "data.updated_at",
            "description": "<p>Album update datetime.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"code\": \"success\",\n    \"message\": \"Album creation success.\",\n    \"data\": {\n        \"id\": 2,\n        \"uid\": 62,\n        \"name\": \"first_album\",\n        \"description\": \"first_album_desc\",\n        \"created_at\": \"2019-12-15 20:39:48\",\n        \"updated_at\": \"2019-12-15 20:39:48\"\n    },\n    \"RequestId\": \"991321F7-F28C-451C-B602-F05622FD2939\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./album.py",
    "groupTitle": "Album"
  },
  {
    "type": "get",
    "url": "/albums/:album_id/delete",
    "title": "Album Deletion",
    "name": "Delete_Album",
    "group": "Album",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"code\": \"success\",\n    \"message\": \"Delete album success.\",\n    \"RequestId\": \"1D598B97-4469-4708-860B-A84F8D3D5B5E\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./album.py",
    "groupTitle": "Album"
  },
  {
    "type": "get",
    "url": "/albums/:album_id/item",
    "title": "Add/Remove item to Album",
    "name": "Edit_Album_Item",
    "group": "Album",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "add",
            "description": "<p>Hash of the image for images to be added to album</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remove",
            "description": "<p>Hash of the image for images to be removed from album</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"code\": \"success\",\n    \"message\": \"Update album success.\",\n    \"data\": null,\n    \"RequestId\": \"AE8BAFAB-31C4-46E6-AD0E-A11AA1842C45\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./album.py",
    "groupTitle": "Album"
  },
  {
    "type": "get",
    "url": "/albums/:album_id",
    "title": "Get All Album Items",
    "name": "Get_Album_Items",
    "group": "Album",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data",
            "description": "<p>Picture Hash.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"code\": \"success\",\n    \"message\": \"Update album success.\",\n    \"data\": [\n        \"fFdcX36BNLaIh2WSZgxGumCrOv\",\"uriX6BFzOmyYPDL9EcjW8oCJha\"\n    ],\n    \"RequestId\": \"F098AE96-9E5B-4BE4-8504-1D953B39ECD8\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./album.py",
    "groupTitle": "Album"
  },
  {
    "type": "get",
    "url": "/albums",
    "title": "Get All Albums",
    "name": "Get_Albums",
    "group": "Album",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Album ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.uid",
            "description": "<p>Album User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Album name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>Album description.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "data.created_at",
            "description": "<p>Album creation datetime.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "data.updated_at",
            "description": "<p>Album update datetime.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"code\": \"success\",\n    \"message\": \"List album items success.\",\n    \"data\": [\n        {\n            \"id\": 2,\n            \"uid\": 62,\n            \"name\": \"first_album\",\n            \"description\": \"first_album_desc\",\n            \"created_at\": \"2019-12-15 20:39:48\",\n            \"updated_at\": \"2019-12-15 20:39:48\"\n        }\n    ],\n    \"RequestId\": \"BF7AA593-3AB0-4488-B250-530DA692362C\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./album.py",
    "groupTitle": "Album"
  },
  {
    "type": "get",
    "url": "/clear",
    "title": "Clear IP Based Temporary Upload History",
    "name": "Clear_Temporary_History",
    "group": "Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>Return Type: <code>json</code> or <code>xml</code>, the default value is <code>json</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"code\": \"success\",\n    \"message\": \"Clear list success.\",\n    \"data\": [],\n    \"RequestId\": \"5E29C689-D3C2-4D1C-9313-1AB7D5F9E264\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./image.py",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/delete/:hash",
    "title": "Image Deletion",
    "name": "Deletion",
    "group": "Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>Image Deletion Hash</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>Return Type: <code>json</code> or <code>xml</code>, the default value is <code>json</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./image.py",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/history",
    "title": "IP Based Temporary Upload History",
    "name": "Temporary_History",
    "group": "Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>Return Type: <code>json</code> or <code>xml</code>, the default value is <code>json</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.width",
            "description": "<p>Width.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.height",
            "description": "<p>Height.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.filename",
            "description": "<p>Filename.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.storename",
            "description": "<p>Store name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.size",
            "description": "<p>Image Size.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.path",
            "description": "<p>Image Path.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.hash",
            "description": "<p>Image Deletion HASH.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": "<p>Image URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.delete",
            "description": "<p>Image Deletion Link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.page",
            "description": "<p>Image Page Link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./image.py",
    "groupTitle": "Image"
  },
  {
    "type": "post",
    "url": "/upload",
    "title": "Upload Image",
    "name": "Upload",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "multipart/form-data",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "smfile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>Return Type: <code>json</code> or <code>xml</code>, the default value is <code>json</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.width",
            "description": "<p>Width.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.height",
            "description": "<p>Height.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.filename",
            "description": "<p>Filename.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.storename",
            "description": "<p>Store name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.size",
            "description": "<p>Image Size.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.path",
            "description": "<p>Image Path.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.hash",
            "description": "<p>Image Deletion HASH.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": "<p>Image URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.delete",
            "description": "<p>Image Deletion Link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.page",
            "description": "<p>Image Page Link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"success\": true,\n  \"code\": \"success\",\n  \"message\": \"Upload success.\",\n  \"data\": {\n    \"file_id\": 0,\n    \"width\": 4677,\n    \"height\": 3307,\n    \"filename\": \"luo.jpg\",\n    \"storename\": \"D5VpWCKFElUsPcR.jpg\",\n    \"size\": 801933,\n    \"path\": \"/2019/12/16/D5VpWCKFElUsPcR.jpg\",\n    \"hash\": \"Q6vLIbCGZojrMhO2e7BmgFuXRV\",\n    \"url\": \"https://vip1.loli.net/2019/12/16/D5VpWCKFElUsPcR.jpg\",\n    \"delete\": \"https://sm.ms/delete/Q6vLIbCGZojrMhO2e7BmgFuXRV\",\n    \"page\": \"https://sm.ms/image/D5VpWCKFElUsPcR\"\n  },\n  \"RequestId\": \"8A84DDCA-96B3-4363-B5DF-524E95A5201A\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./image.py",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/upload_history",
    "title": "Upload History",
    "name": "Upload_History",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "multipart/form-data",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.width",
            "description": "<p>Width.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.height",
            "description": "<p>Height.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.filename",
            "description": "<p>Filename.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.storename",
            "description": "<p>Store name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.size",
            "description": "<p>Image Size.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.path",
            "description": "<p>Image Path.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.hash",
            "description": "<p>Image Deletion HASH.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.created_at",
            "description": "<p>Image upload timestamp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": "<p>Image URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.delete",
            "description": "<p>Image Deletion Link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.page",
            "description": "<p>Image Page Link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"success\": true,\n  \"code\": \"success\",\n  \"message\": \"Get list success.\",\n  \"data\": [\n      {\n        \"file_id\": 0,\n        \"width\": 4677,\n        \"height\": 3307,\n        \"filename\": \"luo.jpg\",\n        \"storename\": \"D5VpWCKFElUsPcR.jpg\",\n        \"size\": 801933,\n        \"path\": \"/2019/12/16/D5VpWCKFElUsPcR.jpg\",\n        \"hash\": \"Q6vLIbCGZojrMhO2e7BmgFuXRV\",\n        \"created_at\": 1564844329,\n        \"url\": \"https://i.loli.net/2019/12/16/D5VpWCKFElUsPcR.jpg\",\n        \"delete\": \"https://sm.ms/delete/Q6vLIbCGZojrMhO2e7BmgFuXRV\",\n        \"page\": \"https://sm.ms/image/D5VpWCKFElUsPcR\"\n      }\n  ],\n  \"RequestId\": \"8A84DDCA-96B3-4363-B5DF-524E95A5201A\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./image.py",
    "groupTitle": "Image"
  },
  {
    "type": "post",
    "url": "/profile",
    "title": "Get User Profile",
    "name": "Get_Profile",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "multipart/form-data",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>Email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.role",
            "description": "<p>User Group Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.group_expire",
            "description": "<p>User Group Expire Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.email_verified",
            "description": "<p>Email Verification（0 for not verified， 1 for verified）.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.disk_usage",
            "description": "<p>Disk Usage.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.disk_usage_raw",
            "description": "<p>Disk RAW Usage（Byte）.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.disk_limit",
            "description": "<p>Disk Limit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.disk_limit_raw",
            "description": "<p>Disk RAW Limit（Byte）.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"code\": \"success\",\n    \"message\": \"Get user profile success.\",\n    \"data\": {\n        \"username\": \"smms\",\n        \"email\": \"\",\n        \"role\": \"VIP\",\n        \"group_expire\": \"0000-00-00\",\n        \"email_verified\": 0,\n        \"disk_usage\": \"2.58 MB\",\n        \"disk_limit\": \"50.00 GB\",\n        \"disk_usage_raw\": 2706034,\n        \"disk_limit_raw\": 53687091200\n    },\n    \"RequestId\": \"33D9572F-06DE-4571-99E0-801D8DA2316A\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/token",
    "title": "Get API-Token",
    "name": "Get_Token",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username/Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.token",
            "description": "<p>API Token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"code\": \"success\",\n    \"message\": \"Get API token success.\",\n    \"data\": {\n        \"token\": \"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"\n    },\n    \"RequestId\": \"8DCED45B-5E9F-43B1-90C6-29D562F250D5\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user.py",
    "groupTitle": "User"
  }
] });
