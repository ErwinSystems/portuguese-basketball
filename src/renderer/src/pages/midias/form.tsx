import { MediaItem } from "@renderer/components"
import { Scroll } from "@renderer/components/style"
import { useState } from "react"

function Form(): JSX.Element {
    const [countMedia, setCountMedia] = useState<number>(1)
    const media: JSX.Element[] = []
    for (let i = 0; i < countMedia; i++) {
        media.push(<MediaItem key={i} />)
    }
    return (
        <div className="relativeBox">
            <button className='addMediaItem' onClick={() => { setCountMedia(countMedia + 1) }}>+</button>
            <div className="content">
                <Scroll>
                    {media}
                </Scroll>
            </div>


        </div>
    )
}

export default Form