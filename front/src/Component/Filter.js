import React, { useState } from "react";
import "../Style/Modal.scss";

const Filter = ({ type, setType, order, setOrder }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState(type);

  const onChangeType = (e) => {
    let temp = e.target.value;
    setCategory(temp);
  };

  const onChangeOrder = (e) => {
    setOrder(e.target.value);
  };

  const onSubmitModal = async (e) => {
    e.preventDefault();
    setType([Number(category)]);
    setModalOpen(false);
  };
  return (
    <div className="filter__wrapper">
      <div>
        <input
          id="asc"
          type="radio"
          checked={order === "asc"}
          value="asc"
          onChange={onChangeOrder}
        />
        <label htmlFor="asc">오름차순</label>
      </div>
      <div>
        <input
          id="des"
          type="radio"
          checked={order === "des"}
          value="des"
          onChange={onChangeOrder}
        />
        <label htmlFor="des">내림차순</label>
      </div>
      <div>
        <button onClick={() => setModalOpen(!modalOpen)}>필터</button>
        {modalOpen && (
          <div>
            <div className="modal__background"></div>
            <div className="modal__wrapper">
              <div
                className="modal__btn--close"
                onClick={() => setModalOpen(false)}
              >
                <div>X</div>
              </div>
              <div className="modal__container">
                <h2>필터</h2>
                <form onSubmit={onSubmitModal}>
                  <div>
                    <input
                      className="form__input"
                      type="checkbox"
                      id="type 1"
                      checked={category === "1"}
                      onChange={onChangeType}
                      value="1"
                    ></input>
                    <label htmlFor="type 1">category_name</label>
                  </div>
                  <div>
                    <input
                      className="form__input"
                      type="checkbox"
                      id="type 2"
                      checked={category === "2"}
                      onChange={onChangeType}
                      value="2"
                    ></input>
                    <label htmlFor="type 2">category_name</label>
                  </div>
                  <div>
                    <input
                      className="form__input"
                      type="checkbox"
                      id="type 3"
                      checked={category === "3"}
                      onChange={onChangeType}
                      value="3"
                    ></input>
                    <label htmlFor="type 3">category_name</label>
                  </div>
                  <button className="modal__btn--submit" type="submit">
                    전송
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
