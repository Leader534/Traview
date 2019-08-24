// import React from 'react';
// import { View, Text, Image, Button } from 'react-native';
// import ImagePicker from 'react-native-image-picker';

// export default class ChoosePhoto extends React.Component {
//   state = {
//     photo: null
//   };

//   ChoosePhoto = () => {
//     const options = {
//       noData: true
//     };
//     ImagePicker.launchImageLibrary(options, response => {
//       if (response.uri) {
//         this.setState({ photo: response });
//       }
//     });
//   };

//   // handleUploadPhoto = () => {
//   //   fetch('http://localhost:3000/api/upload', {
//   //     method: 'POST',
//   //     body: createFormData(this.state.photo, { userId: '123' })
//   //   })
//   //     .then(response => response.json())
//   //     .then(response => {
//   //       console.log('upload succes', response);
//   //       alert('Upload success!');
//   //       this.setState({ photo: null });
//   //     })
//   //     .catch(error => {
//   //       console.log('upload error', error);
//   //       alert('Upload failed!');
//   //     });
//   // };

//   renderChoosePhoto() {
//     const { photo } = this.state;
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         {photo && (
//           <React.Fragment>
//             <Image
//               source={{ uri: photo.uri }}
//               style={{ width: 300, height: 300 }}
//             />
//             <Button title="Upload" onPress={this.handleUpload} />
//           </React.Fragment>
//         )}
//       </View>
//     );
//   }
// }
