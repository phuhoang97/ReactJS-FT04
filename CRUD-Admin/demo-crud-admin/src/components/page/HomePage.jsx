import React, { useEffect, useState } from "react";
import LayoutNavbar from "../layout/LayoutNavbar";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";

function HomePage() {
  const [data, setData] = useState([]);
  const [view, setView] = useState({});

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`);
    loadUser();
  };

  const handleShowModel = (id) => {
    axios.get(`http://localhost:8000/users/${id}`).then((res) => {
      setView(res.data);
    });
    setShow(true);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // Phân trang
  const [perPage, setPerPage] = useState(4);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // Search
  const [searchInput, setSearchInput] = useState("");

  const loadUser = async () => {
    let url = "http://localhost:8000/users";

    if (searchInput) {
      url += `?q=${searchInput}`;
    }

    // else if (sortTypeName) {
    //   if (sortType === "desc") {
    //     url += `?_sort=${sortTypeName}&_order=desc`;
    //   } else {
    //     url += `?_sort=${sortTypeName}&_order=asc`;
    //   }
    // }

    const countResponse = await axios.get(
      `${url}?_page=1&_limit=1&_count=true`
    );

    const totalResponse = countResponse.headers["x-total-count"];
    const totalPages = Math.ceil(totalResponse / perPage);
    let result = await axios.get(
      `${url}?_page=${currentPage}&_limit=${perPage}&_sort=${sortTypeName}&_order=${sortType}`
    );
    console.log(url);
    setData(result.data);
    setTotalPage(totalPages);
  };

  let paginationItem = [];
  for (let i = 1; i < totalPage; i++) {
    paginationItem.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  console.log(currentPage);

  // Sort
  const [sortType, setSortType] = useState("asc");
  const [sortTypeName, setSortTypeName] = useState("");

  const handleSort = (e) => {
    setSortTypeName(e);
    setSortType(sortType === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    loadUser();
  }, [searchInput, sortType, currentPage, perPage]);

  return (
    <div>
      <LayoutNavbar />
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        Đây là Home Page
      </h2>
      <div className='d-flex' role='search' style={{ marginLeft: "70%" }}>
        <input
          className='form-control me-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className='btn btn-outline-success' onClick={loadUser}>
          Search
        </button>
      </div>
      <Table
        striped
        bordered
        hover
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th onClick={() => handleSort("name")}>
              Name <i class='fa-solid fa-sort'></i>
            </th>
            <th>Phone</th>
            <th>Email</th>
            <th onClick={() => handleSort("age")}>
              Age <i class='fa-solid fa-sort'></i>
            </th>
            <th>Address</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.phone}</td>
              <td>{element.email}</td>
              <td>{element.age}</td>
              <td>{element.address}</td>
              <td>
                <Link to={`/user/edit/${element.id}`}>
                  <Button variant='warning'>Edit</Button>
                </Link>
              </td>
              <td>
                <Button
                  variant='danger'
                  onClick={() => handleDelete(element.id)}
                >
                  Delete
                </Button>
              </td>
              <td>
                <Button
                  variant='info'
                  onClick={() => handleShowModel(element.id)}
                >
                  View
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h2>{view.id}</h2>
                    <p>{view.name} </p>
                    <p>{view.phone} </p>
                    <p>{view.email} </p>
                    <p>{view.age} </p>
                    <p>{view.address} </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant='primary' onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <Pagination>
          <Pagination.Prev
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {paginationItem}
          <Pagination.Next
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPage}
          />
        </Pagination>
      </div>
    </div>
  );
}

export default HomePage;
