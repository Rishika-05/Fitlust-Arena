import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./ArticleForm.css";
export const ArticleForm = () => {
  const [sublist, setSublist] = useState([
    { subtitle: "", image: undefined, content: "" },
  ]);
  const [change, setChange] = useState(1);


  //start of change
  const [file, setfile] = useState(null);
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const url = "http://localhost:9002/upload";
    axios.post(url, formData, config).then((res) => {
      alert("hogaya bhai");
      console.log(res.data);
    }).catch((err) => {
      console.log('err', err);
    });
  }
  const onInuptChange = (e) => {
    setfile(e.target.files[0]);
  }
  //end of change


  const addsubsection = () => {
    var dataObj = { subtitle: "", image: undefined, content: "" };
    var sublistNew = sublist;
    sublistNew.push(dataObj);
    setSublist(sublistNew);
    setChange(!change);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    var dataObj = { subtitle: "", image: undefined, content: "" };
    var articleObject = {
      title: event.target.title.value,
      image: event.target.thumbnail.files,
      author: event.target.author.value,
      type: event.target.type.value,
      brief: event.target.brief.value,
      data: sublist,
    };
    let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/upload`, {
      method: "POST",
      body: JSON.stringify(articleObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(articleObject);
    let data = await res.json();
  };
  const changeSubtitle = (subtitle, index) => {
    var copy = sublist;
    copy[index].subtitle = subtitle;
    setSublist(copy);
    setChange(!change);
  };
  const changeSubtitleImage = (subtitle, index) => {
    var copy = sublist;
    copy[index].image = subtitle;
    setSublist(copy);
    setChange(!change);
  };
  const changeSubtitleContent = (subtitle, index) => {
    var copy = sublist;

    copy[index].content = subtitle;
    setSublist(copy);
    setChange(!change);
  };
  /*const test = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(e.target.image.files[0]);
    formData.append("image", e.target.image.files[0]);
    let data = { image: e.target.image.files[0] };

    let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/upload`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    let damta = await res.json();
  };*/
  useEffect(() => { }, []);

  return (
    <div className="container">
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Enter the title of article</Form.Label>
          <Form.Control name="title" type="text" placeholder="Title" />
        </Form.Group>
        <Form.Select name="type" aria-label="type-select" className="mb-3">
          <option disabled>Select the category of article</option>
          <option value="training">Training</option>
          <option value="nutrition">Nutrition</option>
          <option value="supplementation">Supplementation</option>
        </Form.Select>
        <Form.Label>Author's name</Form.Label>
        <Form.Control
          type="text"
          name="author"
          className="mb-3"
          placeholder="Author's Name"
        />
        <Form.Label>Article Thumbnail</Form.Label>
        <Form.Control name="thumbnail" className="mb-3" type="file" />
        <Form.Label>Article brief</Form.Label>
        <Form.Control
          type="text"
          name="brief"
          className="mb-3"
          placeholder="Short brief about article"
        />
        <div id="subsection-box">
          {sublist.map((element, index) => {
            return (
              <div key={index} className="p-3">
                <Form.Group className="mb-3" controlId="subarticle">
                  <Form.Label>
                    Enter title for Subsection {index + 1}
                  </Form.Label>
                  <Form.Control
                    value={element.subtitle}
                    onChange={(event) => {
                      changeSubtitle(event.target.value, index);
                    }}
                    type="text"
                    placeholder="Subtitle"
                  />
                  <Form.Label>Subsection Image</Form.Label>
                  <Form.Control
                    value={element.image}
                    onChange={(event) => {
                      changeSubtitleImage(event.target.files, index);
                    }}
                    className="mb-3"
                    type="file"
                  />
                  <Form.Label>
                    {" "}
                    Subsection content in markdown language
                  </Form.Label>
                  <Form.Control
                    value={element.content}
                    type="text"
                    onChange={(event) => {
                      changeSubtitleContent(event.target.value, index);
                    }}
                    className="mb-3"
                    placeholder=""
                  />
                </Form.Group>
              </div>
            );
          })}
        </div>
        <Button variant="secondary" onClick={addsubsection} className="mt-4">
          Add subsection
        </Button>
        <br></br>
        <Button variant="primary" type="submit" className="mt-4">
          Submit
        </Button>
      </Form>
      <form onSubmit={onFormSubmit}>
        <h1> file upload</h1>
        <input type="file" name="image" onChange={onInuptChange} />
        <button type="submit">upload</button>
      </form>
    </div>
  );
};
export default ArticleForm;
