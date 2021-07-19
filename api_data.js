define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "/home/SIN/workspace/SMMS/smms_docs/doc/main.js",
    "groupTitle": "/home/SIN/workspace/SMMS/smms_docs/doc/main.js",
    "name": ""
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The page of upload list.</p>"
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
