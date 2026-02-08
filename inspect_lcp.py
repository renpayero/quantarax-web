import json

try:
    with open('reporte-inicial.json', 'r') as f:
        data = json.load(f)

    audits = data.get('audits', {})
    lcp_audit = audits.get('largest-contentful-paint-element', {})
    
    print("--- LCP Element ---")
    if lcp_audit.get('details'):
        items = lcp_audit['details'].get('items', [])
        for item in items:
            node = item.get('node', {})
            print(f"Node Tag: {node.get('nodeLabel')}")
            print(f"Snippet: {node.get('snippet')}")
            print(f"Selector: {node.get('selector')}")

except Exception as e:
    print(f"Error: {e}")
