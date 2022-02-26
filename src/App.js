import Header from './components/Header'
import ReviewForm from './components/ReviewForm'
import { ReviewProvider } from './context/ReviewContext'
import ReviewList from './components/ReviewList'
import ReviewStats from './components/ReviewStats'
import GlobalStyle from './components/styles/GlobalStyle'

function App() {

    return (
        <>
        <ReviewProvider>
        <Header />
        <div className="container">
            <ReviewForm />
            <ReviewStats />
            <ReviewList />
            <GlobalStyle />
        </div>
        </ReviewProvider>
        </>
    )
}

export default App