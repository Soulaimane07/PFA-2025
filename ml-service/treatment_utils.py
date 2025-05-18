def suggest_treatment(data):
    tips = {}

    if data["pH"] < 6.5:
        tips["pH"] = "Increase pH with alkaline treatment (e.g., lime)"
    elif data["pH"] > 8.5:
        tips["pH"] = "Decrease pH with acid injection (e.g., sulfuric acid)"
    
    if data["Hardness"] > 180:
        tips["Hardness"] = "Use water softener (ion exchange) for high hardness"
    
    if data["Solids"] > 1000:
        tips["Solids"] = "Use reverse osmosis to reduce high total dissolved solids (TDS)"
    
    if data["Chloramines"] > 4:
        tips["Chloramines"] = "Use activated carbon filtering for high chloramines"
    
    if data["Sulfate"] > 500:
        tips["Sulfate"] = "Use reverse osmosis or distillation to reduce sulfate"
    
    if data["Conductivity"] > 1000:
        tips["Conductivity"] = "Reduce high conductivity with reverse osmosis"
    
    if data["Organic_carbon"] > 4:
        tips["Organic_carbon"] = "Use activated carbon or advanced oxidation for organic carbon"
    
    if data["Trihalomethanes"] > 0.08:
        tips["Trihalomethanes"] = "Reduce THMs with activated carbon or switch disinfection methods"
    
    if data["Turbidity"] > 5:
        tips["Turbidity"] = "Use coagulation, sedimentation, and filtration for high turbidity"

    return tips
