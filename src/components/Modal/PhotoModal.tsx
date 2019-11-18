import React from 'react';
import Modal from 'react-native-modal';
import {Profile} from '../../styles';
import {View, Button, Image, Alert, Text} from 'react-native';
import {Icon} from 'react-native-elements';

/**
 * Pop up modal for editing profile picture.
 */
const PhotoModal = (props: any) => {
  //icon to signify uploading a profile picture
  const uploadIcon = (
    <Icon
      onPress={() => props.selectProfileImage()}
      name="file-upload"
      size={150}
      color={Profile.ProfileView.Icon.color}
    />
  );

  /**
   * Icon to save image
   */
  const saveIcon = (
    <Icon
      onPress={() => props.uploadProfileImage()}
      name="save"
      size={150}
      color={Profile.ProfileView.Icon.color}
    />
  );

  //image to preview?
  const actionable = props.newImage ? <View>{saveIcon}</View> : null;

  //preview image if there.
  let previewImage = props.newImage ? (
    <View style={{alignSelf: 'center'}}>
      <Image
        source={{uri: props.newImage.uri}}
        style={{width: 250, height: 250}}
      />
    </View>
  ) : null;

  return (
    <Modal isVisible={props.showModal}>
      <View style={Profile.ProfileView.Wrapper2}>
        {uploadIcon}
        {previewImage}
        {actionable}

        <Button
          title="Cancel"
          color="red"
          onPress={() => props.setShowModal(false)}
        />
      </View>
    </Modal>
  );
};

export default PhotoModal;
