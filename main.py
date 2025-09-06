from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline
from contextlib import asynccontextmanager


model_cache = {}

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Loading model...")
    model_cache["fallacy_detector"] = pipeline("text-classification", model="SamanthaStorm/fallacyfinder")
    print("Model loaded...")
    yield
    model_cache.clear()

app = FastAPI(lifespan=lifespan)
class TextItem(BaseModel):
    highlighted_text: str

# API endpoint
@app.post("/analyze")
async def analyze_text(item: TextItem):
    recieved_text = item.highlighted_text
    print(f"Recieved highlighted text: {recieved_text}")
    model = model_cache["fallacy_detector"]
    result = model(item.highlighted_text)
    return {"analysis": result}
