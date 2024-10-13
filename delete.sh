#!/bin/bash

# List of files to delete
files=(
  "frontPages/AdminDataViewer/AdminComponents/sidebar/DataViewer.js"
  "frontPages/AdminDataViewer/AdminComponents/sidebar/UpdatePage.js"
  "frontPages/AdminDataViewer/AdminComponents/sidebar/UpdateTrackingStatus.js"
  "frontPages/AdminDataViewer/AdminPage/AdminMain.js"
  "frontPages/AdminDataViewer/landing-adminPage.js"
  "frontPages/userPages/landing-userPage.js"
  "frontPages/userPages/overviewElements/ElementSidebar/ContactUs.js"
  "frontPages/userPages/overviewElements/ElementSidebar/userInfo.js"
  "frontPages/userPages/overviewElements/ElementSidebar/userTrackingInfo.js"
  "frontPages/userPages/overviewUser.js"
  "index.js"
)

# Loop through and delete files
for file in "${files[@]}"
do
  if [ -f "$file" ]; then
    rm "$file"
    echo "Deleted: $file"
  else
    echo "File not found: $file"
  fi
done
