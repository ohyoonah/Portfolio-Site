import React, { useState} from "react";
import CertificateEditForm from "./CertificateEditForm";
import CertificateCard from "./CertificateCard";

function Certificate({ certificate, setCertificates,isEditable}) {
  const [ isEditing, setIsEditing ] = useState(false);
 
 
  return (
    <>
     {isEditing ? (
      <CertificateEditForm
        key={certificate.certificateId}
        currentCertificate={certificate}
        setCertificates={setCertificates}
        setIsEditing={setIsEditing}
      />
    ) : (
      <CertificateCard
      certificate={certificate}
      isEditable={isEditable}
      setCertificates={setCertificates}
      setIsEditing={setIsEditing}
      
      />
    )}
  </>
  );
}

export default Certificate;