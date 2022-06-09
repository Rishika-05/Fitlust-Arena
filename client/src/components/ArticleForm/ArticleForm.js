import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./ArticleForm.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Bars} from 'react-loader-spinner';
export const ArticleForm = () => {
  const [sublist, setSublist] = useState([
    { subtitle: "", image: undefined, content: "" },
  ]);
  const [change, setChange] = useState(1);
  const [key, setkey] = useState("");
  const [chk, setchk] = useState(false);
  const [name, setname] = useState("");
  const [spinner,setSpinner] = useState(false);
  const addsubsection = () => {
    var dataObj = { subtitle: "", image: undefined, content: "" };
    var sublistNew = sublist;
    sublistNew.push(dataObj);
    setSublist(sublistNew);
    setChange(!change);
  };
  const removesubsection = () => {
    var sublistNew = sublist;
    sublistNew.pop();
    setSublist(sublistNew);
    setChange(!change);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSpinner(true);
    var dataObj = { subtitle: "", image: undefined, content: "" };
    var imageArray = [];

    var articleObject = {
      title: event.target.title.value,
      image: event.target.thumbnail.files[0],
      author: event.target.author.value,
      type: event.target.type.value,
      brief: event.target.brief.value,
      data: sublist,
    };
    imageArray.push(articleObject.image);
    for (let i = 0; i < articleObject.data.length; i++) {
      imageArray.push(articleObject.data[i].image);
    }
    console.log(articleObject);
    const formData = new FormData();
    formData.append('articleData', JSON.stringify(articleObject));
    for (let i = 0; i < imageArray.length; i++) {
      formData.append('imageData', imageArray[i]);
    }
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      },
    };
    const url = `${process.env.REACT_APP_SERVER_URL}/upload`;
    axios.post(url, formData, config).then((res) => {
      setSpinner(false);
      toast(res.data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })


    }).catch((err) => {
      setSpinner(false);
      toast.error("Something went wrong", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.log('err', err);
    });
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

  // useEffect(() => { }, []);
  const onclick = () => {
    if ((key === process.env.REACT_APP_PASS) && name === "admin") {
      toast.success("Key Verified", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setchk(true);
    }
    else {
      toast.error("Incorrect Try again", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setkey("");
      setname("");
      setchk(false);
    }
  }
  const FormButton = props => (
    <div id="button" class="planrow">
      <button onClick={onclick}>{props.title}</button>
    </div>
  );
  return (
    (chk === true) ?
      <div className="container">
        <Form className="mt-4" onSubmit={handleSubmit} enType="multipart/form-data" >
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Enter the title of article</Form.Label>
            <Form.Control name="title" type="text" placeholder="Title" required />
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
            required
          />
          <Form.Label>Article Thumbnail</Form.Label>
          <Form.Control name="thumbnail" className="mb-3" type="file" required />
          <Form.Label>Article brief</Form.Label>
          <Form.Control
            type="text"
            name="brief"
            className="mb-3"
            placeholder="Short brief about article"
            required
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
                      required
                    />
                    <Form.Label>Subsection Image</Form.Label>
                    <Form.Control

                      onChange={(event) => {
                        changeSubtitleImage(event.target.files[0], index);
                      }}
                      className="mb-3"
                      type="file"
                      required
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
                      required
                    />
                  </Form.Group>
                </div>
              );
            })}
          </div>
          <Button variant="secondary" onClick={addsubsection} className="mt-4">
            Add subsection
          </Button>
          <Button variant="secondary" onClick={removesubsection} className="mt-4 mx-3">
            Remove subsection
          </Button>
          <br></br>
          <Button variant="primary" type="submit" className="mt-4">
            {spinner?<Bars height="30"
    width="50"
    color='white'/>:"Submit"}
          </Button>
        </Form>
      </div>
      :
      <>
        <div id="loginform">
          <div>
            <h2 id="headerTitle">Admin Login</h2>
            <div className='planrow'>
              <label>Username</label>
              <input type="text" placeholder="Username" onChange={(e) => { setname(e.target.value) }} />
            </div>
            <div className='planrow'>
              <label>Password</label>
              <input type="password" placeholder="Admin Key" onChange={(e) => { setkey(e.target.value) }} />
            </div>
            <FormButton title="Log in" />
          </div>
        </div>
      </>
  );
};
export default ArticleForm;
