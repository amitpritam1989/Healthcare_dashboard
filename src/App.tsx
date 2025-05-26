import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DashboardMainContent from './components/DashboardMainContent'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f6fa;
`

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <Sidebar />
        <DashboardMainContent />
      </MainContainer>
    </AppContainer>
  )
}

export default App 