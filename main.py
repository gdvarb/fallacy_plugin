from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class TextItem(BaseModel):
    highlighted_text: str

# API endpoint
@app.post("/analyze")
async def analyze_text(item: TextItem):
    recieved_text = item.highlighted_text
    print(f"Recieved highlighted text: {recieved_text}")
    return {"text_recieved": recieved_text, "analysis": "todo"}
