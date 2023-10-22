import os
from PIL import Image
import json

def optimize_and_rename_images(input_folder, output_folder):
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    image_list = []
    counter = 0

    for root, _, files in os.walk(input_folder):
        for filename in files:
            if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', 'webp')):
                image_path = os.path.join(root, filename)

                # Open the image using Pillow
                with Image.open(image_path) as img:
                    # Resize the image
                    img.thumbnail((800, 800))
                    img = img.convert("RGB")  # Convert to RGB for best WebP results
                    webp_filename = f"Cirujia-plastica-{counter}.webp"
                    webp_path = os.path.join(output_folder, webp_filename)
                    img.save(webp_path, "WEBP", quality=10, optimize=True)  # Adjust quality value as needed

                # Rename the file
                new_image_path = os.path.join(output_folder, webp_filename)
                os.rename(image_path, new_image_path)

                # Add the new image name to the list
                image_list.append(webp_filename)
                counter += 1

    # Create a JSON file with the list of image names
    json_filename = "image_list.json"
    json_path = os.path.join(output_folder, json_filename)
    with open(json_path, "w") as json_file:
        json.dump(image_list, json_file)

if __name__ == "__main__":
    input_folder = "public/images"
    output_folder = "public/optimal"

    optimize_and_rename_images(input_folder, output_folder)
