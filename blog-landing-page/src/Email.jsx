import React from 'react'

function Email({senderName,reciverName,functionName}) {
  return (
    <>
      <p className="email">
        Hi <span>{reciverName}</span>,
        <br />I wanted to let you know as soon as possible that I will be
        staying home from work today. Unfortunately, I developed a stomach bug
        that has made it very difficult to get work done. I went to urgent care
        last night and was told it should subside within <span>{functionName}</span> hours. I do not
        expect to be online throughout the day. While I do plan to be back in
        the office tomorrow, I’ve asked Kelly to take over for me today in case
        any emergencies arise. I had an important call scheduled with a
        supplier, but Daniel has agreed to manage the meeting. Please let me
        know of any additional steps you’d like me to take to ensure the day
        runs as smoothly as possible in my absence. <br />
        Thank you,
        <br />
        <span >{senderName}</span>
      </p>
    </>
  );
}

export default Email