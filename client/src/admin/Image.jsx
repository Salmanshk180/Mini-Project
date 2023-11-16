import React, { useState, useEffect } from "react";
import axios from "axios";

const Image = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [allImage, setAllImage] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    getImage();
  }, [image]);

  const submitImage = async (e) => {
    e.preventDefault();
    if (!title || !category) {
      alert("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);

    if (image) {
      // Include the image in formData only if it is selected
      formData.append("image", image);
    }

    try {
      if (selectedImage) {
        // If an image is selected, update it
        await axios.put(
          `http://localhost:3000/admin/images/${selectedImage._id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        setSelectedImage(null); // Reset selected image after update
      } else {
        // If no image is selected, create a new one
        if(!image) {
          alert("Please select an image");
        }
        else{

          await axios.post("http://localhost:3000/admin/images/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        }
      }
      getImage(); // Refresh the image list after successful upload/update
      // Clear the input fields after successful upload/update
      setImage(null);
      setTitle("");
      setCategory("");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const onInputChange = (e) => {
    setImage(e.target.files[0]);
  };

  const getImage = async () => {
    try {
      const result = await axios.get("http://localhost:3000/admin/images");
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const editImage = async (data) => {
    setSelectedImage(data);
    setTitle(data.title);
    setCategory(data.category);
  };

  const deleteImage = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/admin/images/${id}`);
      getImage(); // Refresh the image list after successful delete
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div>
      <form onSubmit={submitImage}>
        <div className="card w-50 mx-auto border-0">
          <div className="d-flex">
            <input
              type="text"
              placeholder="Title"
              className="my-1 me-1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Category"
              className="my-1 ms-1"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="d-flex">
            <input
              type="file"
              accept="image/*"
              className="my-1 me-1"
              onChange={onInputChange}
            />
            <button type="submit" className="btn btn-primary my-1">
              {selectedImage ? "Update" : "Upload"}
            </button>
          </div>
        </div>
      </form>
      <div className="d-flex mt-4">
        {allImage.length === 0
          ? "No images"
          : allImage.map((data) => (
              <React.Fragment key={data._id}>
                <div className="card shadow me-3">
                  <img
                    src={`http://localhost:3000/admin/images/${data.image}`}
                    alt={data.image}
                    height={120}
                    width={180}
                    style={{ objectFit: "cover" }}
                  />
                  <p className="text-center">{data.title}</p>
                  <p className="text-center">{data.category}</p>
                  <div className="d-flex justify-content-between mx-2 mb-1 mt-0">
                    <button
                      className="btn btn-info me-2"
                      onClick={() => editImage(data)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteImage(data._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </React.Fragment>
            ))}
      </div>
    </div>
  );
};

export default Image;
