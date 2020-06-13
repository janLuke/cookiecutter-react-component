import glob
from pathlib import Path
import shutil


def remove(path):
    path = Path(path)
    if path.is_file:
        path.unlink()
    elif Path(path).is_dir:
        shutil.rmtree(path)


def collapse_blank_lines(lines, skip_initial_blank=True):
    last = '' if skip_initial_blank else 'a'
    for line in lines:
        if line or last:
            yield line 
        last = line


def format_javascript(code):
    out = []
    lines = (line.rstrip() for line in code.split('\n'))
    filtered_lines = list(collapse_blank_lines(lines))
    return '\n'.join(filtered_lines)


file_to_flag = {
    'index.js': '{{ cookiecutter.include_index_file }}' == 'y',
    '{{ cookiecutter.component_name }}.test.js': '{{ cookiecutter.include_test_file }}' == 'y'
}

for path, to_include in file_to_flag.items():
    if not to_include and Path(path).exists():
        remove(path)

for path in Path('.').glob('*.js'):
    content = path.read_text();
    formatted = format_javascript(content);
    path.write_text(formatted, encoding='utf-8')

