import React from 'react';
import styled from 'styled-components';



const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: var(--color-text);
  margin-bottom: 2px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Card = styled.div`
  width: 550px; /* Reduced card width */
  background-color: rgba(12, 12, 12, 0.6);
  border-radius: 10px;
  
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px; /* Reduced card width on smaller screens */
  }

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
  border: 0.1px solid #854CE6;
  align-self: ${props => props.alternate ? 'flex-start' : 'flex-end'};
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  background-color:white;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color:var(--color-text);
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color:var(--color-text);
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  margin-top: 1px;
`;

const Skill = styled.span`
  background-color:var(--color-dark);
  color: var(--color-text);
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  
`;

const InfoCard = ({ item, isExperience, alternate }) => {
  const skillsArray = isExperience && item.skills ? item.skills.split(',') : [];
  
  return (
    <Card alternate={alternate}>
      <Top>
      <Image src={item.img || item.imageSrc} alt="Logo"  />
        <Body>
          <Title>{isExperience ? item.role : item.school}</Title>
          <Subtitle>{isExperience ? item.company : item.degree}</Subtitle>
          <Date>{item.date}</Date>
        </Body>
      </Top>
      {!isExperience && <Grade><b>Grade: </b>{item.grade}</Grade>}
      <Description>
        <Span>{item.desc}</Span>
      </Description>
      {isExperience && skillsArray.length > 0 && (
        <SkillsContainer>
          {skillsArray.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </SkillsContainer>
      )}
      {item.doc && (
        <a href={item.doc} target="_blank" rel="noopener noreferrer">
          <button style={{ background: "#2842aa", color: '#fff', border: 'none', borderRadius: '6px', padding: '8px 18px', cursor: 'pointer', marginTop: '10px' }}>
            View Document
          </button>
        </a>
      )}
    </Card>
  );
};

export default InfoCard;
