import styled from 'styled-components'

export const Content = styled.div`
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #98692c;
  .item {
    display: flex;
    flex-direction: row;
    margin: 4px;
    justify-content: space-between;
    .mediaUpload {
      display: none;
    }
  }
  button {
    background-color: #00000001;
    border: none;
    border-color: none;
  }
  button.close,
  .btnMedia {
    background: none;
    border: none;
    color: red;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
  }
  .btnMedia {
    color: #00f;
  }
  .play {
    display: inline-block;
    color: #fff;
    border: none;
    font-size: 10px;
    cursor: pointer;
  }
  .play:hover .iconPlay {
    border-left: 15px solid blue;
  }
  .iconPlay {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 15px solid green;
    border-bottom: 10px solid transparent;
    margin-right: 10px;
    vertical-align: middle;
  }

  .time {
    border-radius: 20px;
    border: 3px solid ${(props): string | undefined => props.theme.colors.brown};
    padding: 2px;
    position: relative;
    width: 30%;
    background-color: #00000001;
    font-size: 12px;
    text-align: center;
  }

  .mediaInfo {
    width: 100%;

    font-size: 12px;
    border-radius: 20px;
    border: 3px solid ${(props): string | undefined => props.theme.colors.brown};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
