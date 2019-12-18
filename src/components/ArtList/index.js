import React from 'react'
import { connect } from "react-redux";
import { openArtlist, removeArtItem, addArt } from '../../redux/actions/artwork';
import Button from '../Button/index';
import ModalWrapper from '../Modal/ModalWrapper';

import styles from "./styles.module.css";
import { Link } from 'react-router-dom';

class ArtList extends React.PureComponent{
  state = {
    openModal: false,
    word: '',
  }

  componentDidMount(){
    this.props.openArtlist();
  }

  handleOpenModal = () => {
    this.setState(state => ({
      openModal: !state.openModal,
    }))
  }

  handleChange = (e) => {
    this.setState({
      word: e.target.value,
    })
  }

  handleAddForm = () => {
    this.props.addArt(this.state.word);
    this.handleOpenModal();
  }

  renderArtWork = () => {
    const { removeArtItem, artList } = this.props;
    return artList.map(item => {
      return (
        <Link 
          to={{
            pathname: "/artworks",
            state: { id: item._id }
          }}
          replace
          key={item._id}
          className={styles.card}
        >
          <p>
            {item.title}
          </p>
          <Button 
            type='button'
            className={styles.button}
            label='Удалить'
            onClick={() => {
              removeArtItem(item._id)
            }}
          />
        </Link>
      );
    })
  }

  render(){
    const { artList, id } = this.props;
    const activeArt = artList.find(item => item._id === id)

    return(
      <div>
        <div>
         <Button label="Добавить новую запись" onClick = {this.handleOpenModal}/> 
        </div>
        <div className={styles.artContent}>
          <div className={styles.artList}>
            {this.renderArtWork()}
          </div>
          {activeArt && (
            <div className={styles.artTitle}>
              Название: {activeArt.title}
            </div>
          )}
        </div>
        {this.state.openModal && (
          <ModalWrapper
            button={
              <Button type='button' label='Добавить' onClick={this.handleAddForm}/>
            }
            onClose={this.handleOpenModal}
          >
            <div className={styles.cardAdd}>
              <form className={styles.form}>
                <label className={styles.formLabel}>Название</label>
                <input
                  className={styles.formInput}
                  value={this.state.word}
                  onChange={this.handleChange}
                  placeholder='Введите название'
                />
              </form>
            </div>
          </ModalWrapper>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    artList: state.artWork.artList,
  }
};

const mapDispatchToProps = {
  openArtlist,
  removeArtItem,
  addArt,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtList);
