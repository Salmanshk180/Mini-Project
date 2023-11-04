import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const AddTemplates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [templateData, setTemplateData] = useState([
    {
      id: 1,
      image:
        "   https://pixabay.com/get/g45650fc6f01f061c90d21c22a10d40270b2706c10b2a91074f87f4421758b2b10e66e05f7046604ab89821c3622475fa_150.jpg",
      title: "Image 1",
    },
    {
      id: 2,
      image:
        "https://pixabay.com/get/ge2c31a0fdd421600ef1bb19459c48de33c3ed8a94502427bdff495613124caf7cc09c6f89d2ae3cc4a691061645fb0fa621ec9495ef99570aef01e3514e14ecd_150.jpg",
      title: "Image 2",
    },
    {
      id: 3,
      image:
        "https://pixabay.com/get/gd19f2803ada2aa57020a0a509b615e7840c92ce75d565c87082d03b1ffa5930c7f5e4a529e1f2729cd2881848383dd263205a9c52e0778151154e585b1c58b8c_150.jpg",
      title: "Image 3",
    },
  ]);
  const [newImage, setNewImage] = useState(null);

  const filteredTemplates = templateData.filter((template) =>
    template.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newTemplate = {
          id: templateData.length + 1,
          image: e.target.result,
          title: "New Image",
        };
        setTemplateData([...templateData, newTemplate]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between mt-3 align-items-center ms-5">
        <SearchInput
          type="text"
          placeholder="Search Images"
          value={searchQuery}
          className="w-50 shadow"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div>
          <label
            htmlFor="imageUpload"
            className="me-5 text-center px-5 shadow"
            style={{
              background: "rgb(255,123,0)",
              border: "0px",
              borderRadius: "0px",
              padding: "10px",
              color: "rgba(255,255,255)"
            }}
          >
            Upload Image
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div
        className="mt-1"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filteredTemplates.map((template, index) => (
          <TemplateCard key={index} className="shadow">
            <ImageContainer>
              <Image src={template.image} alt={template.title} />
            </ImageContainer>
            <p className="text-center mt-1">{template.title}</p>
          </TemplateCard>
        ))}
      </div>
    </>
  );
};

const TemplateCard = styled.div`
  width: 300px;
  height: 150px ;
  margin: 15px;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
`;
const Image = styled.img`
width: 300px; /* Set the width to match your desired display width */
height: 150px; /* Set the height to match your desired display height */
object-fit: cover;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default AddTemplates;
