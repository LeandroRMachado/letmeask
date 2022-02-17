import { ReactNode } from "react"
import classnames from "classnames"
 
import "../Question/styles.scss"

type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  isAnswered?: boolean
  isHightlighted?: boolean
}


export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHightlighted = false
}: QuestionProps) {
  return (
    <div className={classnames(
      'question',
      { answered: isAnswered},
      { highlighted: isHightlighted && !isAnswered }
      )}>
        
     {/* {`question ${isAnswered ? 'answered' : ''} ${isHightlighted ? 'highlighted' : '' }`} */}

      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  )
}