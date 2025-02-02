import React, { useEffect, useState } from 'react'
import InformatinModal from '../components/InformatinModal'

function Profilepage() {

    const [isModelOpen, setIsModelOpen] = useState(true)

    return (
        <div>
            {isModelOpen && <InformatinModal message1="" message2="" onClose={() => setIsModelOpen(false)} />}
            <div className='flex  flex-col justify-center items-center'>
                <h1 className='text-3xl font-medium' >ProfilePage</h1>
                <h3 className='font-light text-2xl text-red-600'>Not implemented correctly</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum libero aperiam ab eligendi dignissimos ex at voluptatibus quidem ducimus harum corrupti dolores eos dicta incidunt magnam ipsam officia, possimus quam.
                    Dignissimos natus hic quidem quas maxime, eius eaque consectetur omnis repudiandae, quis sit nesciunt officiis odit autem itaque nulla ad. Mollitia sed rerum quis deleniti voluptatem harum veritatis, ullam repellendus.
                    Ducimus pariatur minus sit exercitationem quisquam nulla ex quas esse ea cupiditate numquam id nisi adipisci reprehenderit animi inventore, nobis dolorum quos. Tempore, aliquid! Natus quaerat illo reiciendis molestiae voluptas!
                    Ea, quia. Ea eaque eius fuga, blanditiis modi illo quas, dolor quam ratione quibusdam libero tempora cum, cupiditate suscipit reprehenderit soluta necessitatibus maiores illum minus delectus minima architecto. Iusto, porro?
                    Fuga pariatur explicabo placeat atque natus ex accusamus libero in aliquam ab a numquam, laborum unde, architecto quos? Nostrum, corporis eaque? Delectus qui quasi expedita maxime quam possimus velit optio?
                    Doloremque soluta recusandae beatae consequuntur unde animi error eaque consectetur fugiat quis facilis alias itaque illum dolor voluptatem a fugit, vitae dolore officia optio praesentium repudiandae ipsam provident! Sunt, impedit.
                    Architecto iste sapiente dignissimos sequi? Error, ipsum non nemo debitis qui ex veniam molestias deserunt possimus, perspiciatis earum porro esse, illo officiis. Voluptates dolorum qui inventore, necessitatibus modi eum odio?
                    Natus nobis, maiores accusantium autem expedita aperiam ipsum aliquid animi exercitationem error corporis doloremque praesentium beatae voluptates? Facilis sequi, atque illo, nostrum deserunt quia, vitae autem exercitationem assumenda itaque error?
                    Atque, repellendus officia aliquid nisi cupiditate vitae quae. Delectus quidem reprehenderit sit consequuntur consectetur magnam ipsam doloribus. Voluptatibus rem, molestias voluptates ea nulla eveniet necessitatibus minus consequatur similique quo in.
                    Architecto officia, distinctio repudiandae dolor earum aperiam molestiae consectetur sit fugit id repellendus voluptatem placeat cum qui optio tempore! Aut dolor itaque fugit sequi quae, exercitationem hic ipsa doloremque animi?</p>

            </div>
        </div>
    )
}

export default Profilepage
