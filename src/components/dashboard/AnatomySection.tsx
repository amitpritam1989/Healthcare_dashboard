import styled from 'styled-components'
import anatomyImg from '../../assets/anatomy.png'

const SectionContainer = styled.div`
  background-color: white;
  border-radius: 24px;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnatomyImageWrapper = styled.div`
  position: relative;
  width: 220px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnatomyImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
`;

const FloatingLabel = styled.div<{ top: string; left: string; color: string }>`
  position: absolute;
  top: ${p => p.top};
  left: ${p => p.left};
  background: ${p => p.color};
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 12px;
  padding: 0.4rem 1rem;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const labels = [
  { text: 'Healthy Heart', top: '18%', left: '70%', color: '#5e81f4' },
  { text: 'Healthy Leg', top: '70%', left: '-30%', color: '#1abc9c' },
];

const AnatomySection = () => (
  <SectionContainer>
    <AnatomyImageWrapper>
      <AnatomyImage src={anatomyImg} alt="Anatomy" />
      {labels.map((label, i) => (
        <FloatingLabel key={i} top={label.top} left={label.left} color={label.color}>
          {label.text}
        </FloatingLabel>
      ))}
    </AnatomyImageWrapper>
  </SectionContainer>
);

export default AnatomySection; 