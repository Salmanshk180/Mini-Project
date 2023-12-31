import React, { useState } from "react";
import styled from "styled-components";

const templateData = [
  {
    id: 1,
    image:
      "https://static.wixstatic.com/media/72c0b2_58cde2ebb708454fb4aa74c2b5c1b648~mv2.png/v1/fill/w_640,h_366,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/72c0b2_58cde2ebb708454fb4aa74c2b5c1b648~mv2.png",
    title: "Template 1",
  },
  {
    id: 2,
    image:
      "https://marketplace.canva.com/EAFAMirCsX4/2/0/1600w/canva-purple-creative-livestream-youtube-thumbnail-X2eVuOzURSM.jpg",
    title: "Template 2",
  },
  {
    id: 3,
    image:
      "https://designhub.co/wp-content/uploads/2020/06/TitleImage2-758x426.png",
    title: "Template 3",
  },
];

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTemplates = templateData.filter((template) =>
    template.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="d-flex justify-content-between mt-3 align-items-center w-75  mx-auto">
        <SearchInput
          type="text"
          placeholder="Search Templates"
          value={searchQuery}
          className="w-100 shadow"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
  height: 150px;
  margin: 15px;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default Templates;
