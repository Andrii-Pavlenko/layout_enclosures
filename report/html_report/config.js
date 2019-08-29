report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\01792330425_entire-document_0_document_0_desktop.png",
        "test": "..\\bitmaps_test\\20190829-141537\\01792330425_entire-document_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "01792330425_entire-document_0_document_0_desktop.png",
        "label": "entire-document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "12.44",
          "analysisTime": 120
        },
        "diffImage": "..\\bitmaps_test\\20190829-141537\\failed_diff_01792330425_entire-document_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\01792330425_single_block_0_qa-block_0_desktop.png",
        "test": "..\\bitmaps_test\\20190829-141537\\01792330425_single_block_0_qa-block_0_desktop.png",
        "selector": "#qa-block",
        "fileName": "01792330425_single_block_0_qa-block_0_desktop.png",
        "label": "single block",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 9,
            "height": -92
          },
          "misMatchPercentage": "61.10",
          "analysisTime": 79
        },
        "diffImage": "..\\bitmaps_test\\20190829-141537\\failed_diff_01792330425_single_block_0_qa-block_0_desktop.png"
      },
      "status": "fail"
    }
  ]
});