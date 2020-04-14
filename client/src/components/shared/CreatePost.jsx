import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function CreatePost(props) {
  //help with image upload for React/cloudinary https://www.youtube.com/watch?v=hlYczGvLlDY
  // const [image, setImage] = useState("");
  // const [loading, setLoading] = useState(false);

  // const uploadImage = async (e) => {
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append("file", files[0]);
  //   data.append("upload_preset", "instashop");
  //   setLoading(true);
  //   const res = await fetch(
  //     "https://api.cloudinary.com/v1_1/dolrvzlkq/image/upload",
  //     {
  //       method: "POST",
  //       body: data,
  //     }
  //   );
  //   const image = await res.json();

  //   setImage(image.secure_url);
  //   setLoading(false);
  // };

  return (
    <div className="create-form">
      {/* <div>
        <h3 className="createposth3">Create Post</h3>

        <label htmlFor="image">
          Upload Image
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={uploadImage}
          />
        </label>

        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <img
            src={image}
            style={{ maxWidth: "300px", maxHeight: "300px" }}
            alt="Upload Imageost"
          />
        )}
      </div> */}

      <div>
        <form onSubmit={props.newPost}>
          <input
            type="text"
            placeholder="Enter Product Name"
            name="product_name"
            value={props.postForm.product_name}
            onChange={props.handleFormChange}
          />

          <textarea
            type="text"
            placeholder="Enter Post Caption"
            name="caption"
            value={props.postForm.caption}
            onChange={props.handleFormChange}
          />

          <input
            type="text"
            placeholder="Enter Link to Image"
            name="image_link"
            value={props.postForm.image_link}
            onChange={props.handleFormChange}
          />

          <input
            type="text"
            placeholder="Enter Link to Shop"
            name="link_to_product"
            value={props.postForm.link_to_product}
            onChange={props.handleFormChange}
          />
          <button>Create Post</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(CreatePost);
