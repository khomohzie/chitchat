import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { auth } from '../services/firebase'

const Home = () => {
    return (
        <div className="home">
            <Header />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 mt-5">
                            <div className="jumbotron jumbotron-fluid py-5">
                                <div className="container text-center py-5">
                                    <h1 className="display-4">Welcome to Chitchat</h1>
                                    <p className="lead">Engage in discussions with friends anywhere, anytime</p>
                                    {auth().currentUser ? (
                                        null
                                    ) : (
                                            <div className="mt-4">
                                                <Link className="btn btn-primary px-5 mr-3" to="/signup">Create New Account</Link>
                                                <Link className="btn px-5" to="/login">Login to Your Account</Link>
                                            </div>
                                        )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home
