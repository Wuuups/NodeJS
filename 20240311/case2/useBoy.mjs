//直接命名導出, 聚合導出, 重新命名導出的import是一樣的
import { sayMyName, sayMyCountry } from "./boy.mjs"
import { sayMyName, sayMyCountry } from "./boy2.mjs"
import { sayMyName, sayMyCountry } from "./boy3.mjs"


sayMyName()
sayMyCountry()