import json

try:
    with open('reporte-final.json', 'r') as f:
        data = json.load(f)

    print("--- Lighthouse Scores ---")
    categories = data.get('categories', {})
    for key, cat in categories.items():
        score = cat.get('score')
        if score is not None:
            print(f"{cat.get('title')}: {score * 100:.0f}")

    print("\n--- Top Issues ---")
    audits = data.get('audits', {})
    failed_audits = []
    for key, audit in audits.items():
        score = audit.get('score')
        if score is not None and score < 1:
            failed_audits.append((score, audit.get('title'), audit.get('displayValue')))
    
    # Sort by score ascending
    failed_audits.sort(key=lambda x: x[0])
    
    for score, title, display in failed_audits[:15]:
        print(f"[{score:.2f}] {title} - {display}")

except Exception as e:
    print(f"Error analyzing report: {e}")
