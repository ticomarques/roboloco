import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
  return (
    <section className="py-5">
        <Title title="Our history" />
        <div className="container">
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-center">
                    <p className="lead text-muted mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iste reiciendis dolore! Accusantium necessitatibus facilis adipisci voluptatem nobis impedit sequi perferendis odit soluta non quam dolorem similique tempore autem deserunt, maxime cum saepe provident tempora consequatur blanditiis quia. Iste eligendi facere laborum, quidem ratione quos voluptates quisquam error, delectus corrupti sapiente distinctio ullam in necessitatibus dicta assumenda ducimus. Repellendus iste rerum beatae repellat? Assumenda impedit quibusdam possimus excepturi laborum earum eum dicta sit est natus! Culpa accusantium esse aut assumenda inventore maxime cum adipisci nesciunt unde, magnam debitis quaerat vel cumque, voluptate, ex explicabo soluta et animi sapiente ut deleniti.
                    </p>
                    <Link to="/about/">
                        <button className="btn text-uppercase btn-yellow">About us</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
