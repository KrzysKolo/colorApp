import React from 'react';
import { ColorsInterface, ModalProps } from '../../models/apiModels';
import { Button, Input, InputRadio, Message } from './../../components';
import './modal.scss'

class Modal extends React.Component<ModalProps> {
  [x: string]: any;
  aRGB: any;
  re(re: any | string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  state = {
    visible: '',
    nameColor: '',
    colorHEX: '',
    colorRGB: '',
    message: '',

    errors: {
        errorNameColor: false,
        errorColorHEX: false,
        errorColorRGB: false,
       }
    };
//OBJECT CONTAINING ERROR INFORMATION
errorMessage = {
    NameColor: "The name must be longer than 3 characters!",
    colorHEX: "HEX must be 7 characters",
    RGBColor: "RGB max 8 characters",
  }
//ARRAY WITH COLORS
  Colors: ColorsInterface[] = [];

//CHANGE OF STATE DEPENDING ON RADIO ID
  handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => this.setState({ visible: e.currentTarget.id });

//CHANGE OF STATE DEPENDING ON INPUT VALUE
  handleChangeValue = (e: React.ChangeEvent<Event & EventTarget & HTMLInputElement>) => {
    e.preventDefault();
    const inputName = e.target.name;
    const value = e.currentTarget.value;
    this.setState({ [inputName]: value })
  };

//CHANGE COLOR NAME IN STRING TO COLOR NAME IN ARRAY
  hexToArrayRgb(fullhex: string | any) {
  let hex = fullhex.substring(1,7);
  let aRGB = [parseInt(hex.substring(0,2), 16), parseInt(hex.substring(2,4), 16), parseInt(hex.substring(4,6), 16)]
   return aRGB;
  }
  rgbToArray(fullrgb: string | any) {
    let newRGB = [];
    const word = fullrgb.split(/,/);
    for (let i = 0; i < word.length; i++) {
      newRGB.push(parseInt(word[i]))
    }
    return newRGB;
    }

//ENROLLED IN LOCALSTORAGE
  addToLocalStorage = () => {
    let color = {
      colorName: this.state.nameColor,
      colorHEX: this.state.colorHEX.toLocaleUpperCase(),
      colorRGB: this.state.colorRGB,
      colorHexToArrayRgb: this.hexToArrayRgb(this.state.colorHEX),
      colorRgbToArray: this.rgbToArray(this.state.colorRGB),
      id: Date.now()+this.Colors.length,
    }
    this.Colors.push(color)
    localStorage.setItem('colors', JSON.stringify(this.Colors))
  };
  //------
/*    */

//SENDING THE COMPLETED FORM
  onSubmit = (e: any) => {
    e.preventDefault();
    const validation = this.formValidation();
    if (validation.correct) {
        this.setState({
        nameColor: this.state.nameColor,
        colorHEX: this.state.colorHEX,
        colorRGB: this.state.colorRGB,
        visible: false,
        message: "The form has been submitted!",
        errors: {
          errorNameColor: false,
          errorColorHEX: false,
          errorColorRGB: false,
          }

        })
    } else {
      this.setState({
        errors: {
          errorNameColor: !validation.NameColor,
          errorColorHEX: !validation.colorHEX,
          errorColorRGB: !validation.RGBColor,
        }
      })
    }
  };

//CLOSE MODAL
  onHandleClose = () => {
    this.setState({
      nameColor: '',
      colorHEX: '',
      colorRGB: '',
      message: '',
      visible: '',
      errors: {
        errorNameColor: false,
        errorColorHEX: false,
        errorColorRGB: false,
      }
    })
    this.props.onCancel();

  };

//FORM VALIDATION
 formValidation = () => {
  let NameColor = false;
  let colorHEX = false;
  let RGBColor = false;
  let correct = false;

  if(this.state.nameColor.length > 3) {
    NameColor = true;
   }
   const regExp = RegExp(
    /^#([A-f0-9])/
 )
  if ((this.state.colorHEX.length === 7) && (regExp.test(this.state.colorHEX))){
    colorHEX = true;
   }
   const refExpRGB = RegExp(
     /^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}$/
   );
  if ((this.state.colorRGB.length <= 11) && (refExpRGB.test(this.state.colorRGB)))  {
    RGBColor = true;
  }
 if ((NameColor && colorHEX) || (NameColor && RGBColor)){
      correct = true;
    }
 return ({
  NameColor,
  colorHEX,
  RGBColor,
  correct,
  })
  };
  str: any;

 componentDidUpdate() {
   if (this.state.message !== '') {
     this.addToLocalStorage();
     setTimeout(() => this.setState({
       visible: '',
       nameColor: '',
       colorHEX: '',
       colorRGB: '',
       message: '',
     }), 1000);
    }
  }
  render() {

  return (
    <>
      {this.props.showModal &&
        <aside className='modal-wrapper'>
          <form onSubmit={this.onSubmit} className='modal-wrapper__form'>
            <aside className='modal-wrapper__form--header'>
              <Input labelTitle='Your color name' placeholder='enter text' value={this.state.nameColor} name="nameColor" onChange={this.handleChangeValue} errorInfo={this.state.errors.errorNameColor} errorMessage={this.errorMessage.NameColor}/>
              <div className='modal-wrapper__form--header__radio'>
                <InputRadio nameInput="changeColor" id="input1" onChange={this.handleRadioClick} label="HEX color model " checked={false} />
                <InputRadio nameInput="changeColor" id="input2" onChange={this.handleRadioClick} label="RGB color model " checked={false}/>
              </div>
            </aside>
            <aside className='modal-wrapper__form-content'>
              {this.state.visible === "input1" && <Input labelTitle='Enter color: ' placeholder='e.g. #ffffff' value={this.state.colorHEX} name="colorHEX" onChange={this.handleChangeValue} errorInfo={this.state.errors.errorColorHEX} errorMessage={this.errorMessage.colorHEX} />}
              {this.state.visible === "input2" && <Input labelTitle='Enter color: ' placeholder='e.g. 255,255,255' value={this.state.colorRGB} name="colorRGB" onChange={this.handleChangeValue} errorInfo={this.state.errors.errorColorRGB} errorMessage={this.errorMessage.RGBColor} />}
            </aside>
            <div className='modal-wrapper__btn-wrapper'>
              <Button type="submit" title="Save" btnClass='btn__action' />
              <Button onClick={this.onHandleClose} type="button" title="Close" btnClass='btn__basic' />
            </div>
            {this.state.message && <Message message={this.state.message} /> }
          </form>
       </aside>
      }
    </>
    )
  }
}
export default Modal;

