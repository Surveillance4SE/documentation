#!/bin/bash

# Build the project
echo "Building the project..."
cd es_documentation && npm run build 

echo "Copying the build to the repository root..."
cp -r build/* ../ && cd ..

echo "Committing the changes..."
git add .
git commit -m "Update the documentation"

echo "Pushing the changes..."
git push

echo "Done!"