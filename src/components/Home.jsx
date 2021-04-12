import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import List from './List';
import {list} from './data'

export const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(content);
      }
    );
  }, []);

  const [category, setCategory] = useState(0);
  const loadCategory = i => { setCategory(i); }
  return (
    <>
      <header className="jumbotron">
        <h3>{content}</h3>
        <div className="row">
          <div className="col-sm">
            <div className="row">
              <List data={list} category={category} />
            </div>
          </div>
        </div>

      </header>

    </>
  )
}

export default Home;