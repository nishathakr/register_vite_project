// import React, { useState } from "react";


// function imagefile() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [imageSaved, setImageSaved] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const fileType = file.type;
//       if (
//         fileType !== "image/jpeg" &&
//         fileType !== "image/png" &&
//         fileType !== "application/pdf"
//       ) {
//         setErrorMessage("You must use .png, .jpg, or .pdf files");
//         setSelectedFile(null);
//       } else {
//         setErrorMessage("");
//         setSelectedFile(file);
//       }
//     } else {
//       setErrorMessage("Please select a file");
//       setSelectedFile(null);
//     }
//   };

//   const handleUploadImage = async () => {
//     if (!selectedFile) {
//       alert("Please select an image to upload.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("formFile", selectedFile);

//     try {
//       setLoading(true);
//       const headers = {
//         "Content-Type": "multipart/form-data",
//       };
//       const response = await fetch(
//         "https://localhost:7016/api/Register/api/CreateRegister",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if (response.ok) {
//         setSuccessMessage("Image uploaded successfully");
//         setImageSaved(true);
//       } else {
//         setErrorMessage("Error uploading image");
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleViewImage = () => {
//     if (selectedFile) {
//       const objectURL = URL.createObjectURL(selectedFile);
//       window.open(objectURL, "_blank");
//     }
//   };

//   const handleRemoveImage = () => {
//     setSelectedFile(null);
//     setSuccessMessage("");
//     setErrorMessage("");
//     setImageSaved(false);
//     const fileInput = document.getElementById("formFile");
//     if (fileInput) {
//       fileInput.value = "";
//     }
//   };
//   return (
//     <div className="upload-container">
//     <h1 className="success m-4">File Upload</h1>
//     <div className="col-4 m-2 primary"></div>
//     <div>
//       <label className="m-1">Image:</label>
//       <input
//         multiple
//         type="file"
//         accept=".png, .jpg, .pdf"
//         id="formFile"
//         name="formFile"
//         className="file-input m-2"
//         onChange={handleFileInputChange}
//       />
//     </div>
//     <div>
//       <button className="upload-button m-2" onClick={handleUploadImage}>
//         Upload Image
//       </button>
//       {imageSaved && (
//         <div>
//           <button className="view-button m-2" onClick={handleViewImage}>
//             View Image
//           </button>
//           <button className="remove-button" onClick={handleRemoveImage}>
//             Remove Image
//           </button>
//         </div>
//       )}
//     </div>
//     {successMessage && <p className="success-message">{successMessage}</p>}
//     {errorMessage && <p className="error-message">{errorMessage}</p>}
//   </div>

//   )
// }

// export default imagefile