import { Model } from "@blink-mind/core";

export const downloadFile = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
};

export function generateModel() {
  const data ={
  "rootTopicKey": ["001"],
  "editorRootTopicKey": "001",
  "focusKey": ["001","004"],
  "extData": {},
  "topics": [
    {
      "key": "001",
      "parentKey": null,
      "subKeys": ["002","004"],
      "collapse": false,
      "style": null,
      "blocks": [
        {
          "type": "CONTENT",
          "data": "A"
        }
      ]
    },
    {
      "key": "002",
      "parentKey": "001",
      "subKeys": ["003"],
      "collapse": false,
      "style": null,
      "blocks": [
        {
          "type": "CONTENT",
          "data": "A1"
        }
      ]
    },
    {
      "key": "003",
      "parentKey": "002",
      "subKeys": [],
      "collapse": false,
      "style": null,

      "blocks": [
        {
          "type": "CONTENT",
          "data": "A2"
        }
      ]
    },
    {
      "key": "004",
      "parentKey": "001",
      "subKeys": ["005"],
      "collapse": false,
      "style":null,
      "blocks": [
        {
          "type": "CONTENT",
          "data": "Root : B"
        }
      ]
    },
    {
      "key": "005",
      "parentKey": "004",
      "subKeys": ["006"],
      "collapse": false,
      "style": null,
      "blocks": [
        {
          "type": "CONTENT",
          "data": "B1"
        }
      ]
    },
    {
      "key": "006",
      "parentKey": "005",
      "subKeys": [],
      "collapse": false,
      "style": null,
      "blocks": [
        {
          "type": "CONTENT",
          "data": "B2"
        }
      ]
    }

  ],
  "config": {
    "readOnly": false,
    "allowUndo": true,
    "layoutDir": 2,
    "theme": {
      "name": "theme2",
      "randomColor": false,
      "background": "#f8f8f8",
      "highlightColor": "#50C9CE",
      "marginH": 45,
      "marginV": 10,
      "contentStyle": {
        "lineHeight": "1.5"
      },
      "linkStyle": {
        "lineRadius": 5
      },
      "rootTopic": {
        "contentStyle": {
          "background": "#50C18A",
          // "background": "red",
          "color": "#fff",
          "fontSize": "34px",
          "borderRadius": "5px",
          "padding": "16px 18px 16px 18px"
        },
        "subLinkStyle": {
          "lineType": "curve",
          "lineWidth": "2px",
          "lineColor": "#43a9ff"
        }
      },
      "primaryTopic": {
        "contentStyle": {
          "background": "#ffffff",
          "borderWidth": "1px",
          "borderStyle": "solid",
          "borderColor": "rgb(221, 170, 68)",
          "borderRadius": "5px",
          "color": "rgb(103,103,103)",
          "fontSize": "14px",
          "padding": "6px 10px 5px 10px"
        },
        "subLinkStyle": {
          "lineType": "round",
          "lineRadius": 5,
          "lineWidth": "2px",
          "lineColor": "#43a9ff"
        }
      },
      "normalTopic": {
        "contentStyle": {
          "background": "#fff",
          "borderRadius": "5px",
          "color": "rgb(103,103,103)",
          "fontSize": "13px",
          "padding": "3px 9px 4px",
          "boxShadow": "1px 1px 1px #ccc"
        },
        "subLinkStyle": {
          "lineType": "round",
          "lineRadius": 5,
          "lineWidth": "1px",
          "lineColor": "#43a9ff"
        }
      }
    }
  },
  "formatVersion": null
}
    return Model.create(data);
}
