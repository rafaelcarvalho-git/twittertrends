import './Trends.css'

function Trends() {
    return (
<ul class="d-flex flex-wrap">
  <li>
    <a href="https://www.google.com.br/" class="trend btn my-3 mx-auto">
      Trend <span class="badge rounded-pill text-white">91542</span>
    </a>
  </li>
  <li>
    <a href="https://www.google.com.br/" class="trend btn position-relative px-3">
      Inbox
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill">
        8512
      </span>
    </a>
  </li>
</ul>
    
    )
}

export default Trends;