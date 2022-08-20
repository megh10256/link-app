const apiUrl = "http://localhost:8080/fs?path";

export default apiUrl;

export const DIR_DATA = {
    "paths": [
      {
        "id": "root",
        "entries": [
          {
            "name": "directory-1",
            "type": "directory"
          },
          {
            "name": "directory-2",
            "type": "directory"
          },
          {
            "name": "directory-3",
            "type": "directory"
          },
          {
            "name": "index.js",
            "type": "file"
          },
          {
            "name": "component-1.js",
            "type": "file"
          },
          {
            "name": "component-2.js",
            "type": "file"
          }
        ]
      },
      {
        "id": "index.js",
        "contents": "() => {console.log('index.js'}"
      },
      {
        "id": "component-1.js",
        "contents": "() => {console.log('component-1.js'}"
      },
      {
        "name": "component-2.js",
        "contents": "() => {console.log('component-2.js'}"
      },
      {
        "id": "directory-1",
        "entries": [
          {
            "name": "directory-1a",
            "type": "directory"
          }
        ]
      },
      {
        "id": "directory-1/directory-1a",
        "entries": [
          {
            "name": "directory-1aA",
            "type": "directory"
          },
          {
            "name": "index.js",
            "type": "file"
          }
        ]
      },
      {
        "id": "directory-1/directory-1a/index.js",
        "contents": "() => {console.log('directory-1/directory-1a/index.js'}"
      },
      {
        "id": "directory-1/directory-1a/directory-1aA",
        "entries": [
          {
            "name": "directory-1aA1",
            "type": "directory"
          },
          {
            "name": "index.js",
            "type": "file"
          },
          {
            "name": "component-1.js",
            "type": "file"
          }
        ]
      },
      {
        "name": "directory-1/directory-1a/directory-1aA/index.js",
        "contents": "() => {console.log('directory-1/directory-1a/directory-1aA/index.js'}"
      },
      {
        "name": "directory-1/directory-1a/directory-1aA/component-1.js",
        "contents": "() => {console.log('directory-1/directory-1a/directory-1aA/component-1.js'}"
      },
      {
        "id": "directory-1aA1",
        "entries": []
      },
      {
        "id": "directory-2",
        "entries": [
          {
            "name": "directory-2a",
            "type": "directory"
          },
          {
            "name": "index.js",
            "contents": "() => {console.log('directory-2/index.js'}",
            "type": "file"
          },
          {
            "name": "component-1.js",
            "contents": "() => {console.log('directory-2/component-01.js'}",
            "type": "file"
          },
          {
            "name": "component-2.js",
            "contents": "() => {console.log('directory-2/component-02.js'}",
            "type": "file"
          }
        ]
      },
      {
        "name": "directory-2/index.js",
        "contents": "() => {console.log('directory-2/index.js'}"
      },
      {
        "name": "directory-2/component-1.js",
        "contents": "() => {console.log('directory-2/component-01.js'}"
      },
      {
        "name": "directory-2/component-2.js",
        "contents": "() => {console.log('directory-2/component-02.js'}"
      },
      {
        "id": "directory-3",
        "entries": []
      }
    ]
  }
  