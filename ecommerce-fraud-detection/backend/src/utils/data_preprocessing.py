def clean_data(df):
    # Remove duplicates
    df = df.drop_duplicates()
    
    # Fill missing values
    df.fillna(method='ffill', inplace=True)
    
    return df

def transform_data(df):
    # Convert categorical variables to numerical
    df = pd.get_dummies(df, drop_first=True)
    
    return df

def preprocess_data(file_path):
    import pandas as pd
    
    # Load data
    df = pd.read_csv(file_path)
    
    # Clean data
    df = clean_data(df)
    
    # Transform data
    df = transform_data(df)
    
    return df